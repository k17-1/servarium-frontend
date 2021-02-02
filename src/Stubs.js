class CentralServerApi {
    constructor(host) {
        this.api_constant = `${host}/api/v1`;
        this.token = null;
    }

none="";
empty="";

    async usersRegister(username, password, email) {
    return {
        "username": username,
        "avatar": null,
        "karma": -10,
        "lang": "ru",
        "follows": 30,
        "followers": 3,
        "registration": "10/02/21",
    };
    }

    async usersAuth(username, password) {
    return {
        "user": username,
        "token": password,
    };
    }

    async usersResetRequest(email) {
    return none;
    }

    async usersReset(password, token){
    return none;
    }

    async usersAvatar(image) {
    return empty;
    }
    async usersAbout(about) {
    return empty;
    }

    async usersSubscribe(community) {
    return empty;
    }

    async usersUnsubscribe(community) {
    return empty;
    }

    async usersUserPosts(M, N){
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

    async communityName(name){
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

    async communityNamePostsText(community, title, text, media, mediaN) {
    return empty;
    }

    async communityCommunityPosts(M, N) {
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

    async communityCommunityPostsPostIdLike(post_id, community) {
    return empty;
    }

    async communityCommunityPostsPostIdDislike(post_id, community) {
    return empty;
    }

}














