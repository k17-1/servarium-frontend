class CentralServerApi {
    constructor(host) {
        this.api_constant = `${host}/api/v1`;
        this.token = null;
    }

none="";
empty="";

function usersRegister(username, password, email) {
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

function usersAuth(username, password) {
    return {
        "user": "User",
        "token": "abcd1234",
    };
}

function usersResetRequest(email) {
    return none;
}

function usersReset(password, token){
    return none;
}

function usersAvatar(image) {
    return empty;
}

function usersAbout(about) {
    return empty;
}

function usersSubscribe(community) {
    return empty;
}

function usersUnsubscribe(community) {
    return empty;
}

function usersUserPosts(M, N){
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

function communityName(name){
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

function communityNamePostsText(community, title, text, media, mediaN) {
    return empty;
}

function communityCommunityPosts(M, N) {
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

function communityCommunityPostsPostIdLike(post_id, community) {
    return empty;
}

function communityCommunityPostsPostIdDislike(post_id, community) {
    return empty;
}

}














