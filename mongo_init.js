db.createUser(
    {
        user: "taggest",
        pwd: "DrentheIsEenMythe",
        roles: [
            {
                role: "readWrite",
                db: "taggest"
            }
        ]
    }
);