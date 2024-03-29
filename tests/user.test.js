const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOne, userOneId, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should signup a new user", async() => {
    const response = await request(app)
        .post("/users")
        .send({
            name: "Ali",
            email: "alinoorspam@gmail.com",
            password: "@@##$$$$$$",
        })
        .expect(201);

    // Assert that the database was changed corrrectly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();
    // Assertion about the response
    expect(response.body.user.name).toBe("Ali");
    expect(response.body).toMatchObject({
        user: {
            name: "Ali",
            email: "alinoorspam@gmail.com",
        },
        token: user.tokens[0].token,
    });
    expect(user.password).not.toBe("@@##$$$$$$");
});

test("Should login existing user", async() => {
    const response = await request(app)
        .post("/users/login")
        .send({
            email: userOne.email,
            password: userOne.password,
        })
        .expect(200);

    // Assert that the database was changed corrrectly
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should not login nonexistent user", async() => {
    await request(app)
        .post("/users/login")
        .send({
            email: userOne.email,
            password: "thisisnotmypass",
        })
        .expect(400);
});

test("Should get profile for user", async() => {
    await request(app)
        .get("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test("Should not get profile for unauthentication user", async() => {
    await request(app)
        .get("/users/me")
        .set("Authorization", `Bearer notmy token`)
        .send()
        .expect(401);
});

test("Should delete account for user", async() => {
    const response = await request(app)
        .delete("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});
test("Should not delete account for unauthentication user", async() => {
    await request(app).delete("/users/me").send().expect(401);
});

test("Should upload avatar image", async() => {
    await request(app)
        .post("/upload/me/avatar")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/profile-pic.jpg")
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should Update vaild user fields", async() => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "Ali",
        })
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.name).toEqual("Ali");
});

test("Should not Update vaild and expect error status", async() => {
    await request(app)
        .patch("/users/me")
        .send({
            name: "Ali Updated",
            email: "alinoorupdate@gmail.com",
        })
        .expect(401);
});
test("Should not Update vaild and expect error status", async() => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            age: "alinoorupdate@gmail.com",
        })
        .expect(400);
});