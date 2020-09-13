import Twitter from "twitter";

export default class TwitterService{
    private client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    public getTweets(){
        return this.client.get("statuses/user_timeline", {"screen_name":"realDonaldTrump", "trim_user":"true","tweet_mode":"extended"})
            .then((response) => {
                console.log(response);
            })
    }
    
    constructor(){}

}