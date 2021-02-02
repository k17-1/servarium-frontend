none="";
empty="";

function UsersRegister(username, password, email) {
    return {
        "username": "Andrey",
        "avatar": null,
        "karma": -10,
        "lang": "ru",
        "follows": 30,
        "followers": 3,
        "registration": "10/02/21",
    };
}

function UsersAuth(username, password) {
    return {
        "user": "User",
        "token": "abcd1234",
    };
}

function UsersResetRequest(email) {
    return none;
}

function UsersReset(password, token){
    return none;
}

function UsersAvatar(image) {
    return empty;
}

function UsersAbout(about) {
    return empty;
}

function UsersSubscribe(community) {
    return empty;
}

function UsersUnsubscribe(community) {
    return empty;
}

function UsersUserPosts(M, N){
    return [{
        "owner": "Otradskaya",
        "community": "College_Server",
        "title": "Why you should choose the College Server",
        "id": "the_best_college",
        "hash": "sdfhy24q3gyb35hg5b",
        "date": "10/02/21 12:05:31",
        "liked": true,
    }];
}

function CommunityName(name){
    return {
        "name": "College_Server",
        "owner": "Otradskaya",
        "title": "Paradise on the Earth",
        "avatar": null,
        "address": "server.od.ua/api",
        "registration": "10/02/21",
        "followers": 59,
    };
}

function CommunityNamePostsText(community, title, text, media, mediaN) {
    return empty;
}

function CommunityCommunityPosts(M, N) {
    return [{
        "owner": "Otradskaya",
        "community": "College_Server",
        "title": "Why you should choose the College Server",
        "id": "the_best_college",
        "hash": "sdfhy24q3gyb35hg5b",
        "date": "10/02/21 12:05:31",
        "liked": true,
    }];
}

function CommunityCommunityPostsPost_idLike(post_id, community) {
    return empty;
}

function CommunityCommunityPostsPost_idDislike(post_id, community) {
    return empty;
}
















