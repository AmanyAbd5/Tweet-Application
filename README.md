# Tweet-Application
We will develop a set of REST APIs for a simple tweet application (back-end only, we will use Postman to check the app). We use frameworks Node JS.

We designed a simple MySQL database containing the following tables:
• Users, contains: ID, Username, Full name, Birthday, Password, and Address
• Tweets, contains: ID, User Id, Description, Hashtag, Date.
• Followers, contains: ID, Follower Id, Followed Id
• Saved_Tweets, contains: ID, Tweet Id, User Id
• Hidden_Tweets, contains: ID, Tweet Id, User Id
• Comments, contains: ID, User Id, Description, Tweet Id, Date.
• Likes, contains: ID, User Id, Tweet Id.

Our RESTful APIs are able to respond, with appropriate data,
For the following requests:
1. Login. 
2. Signup.
3. Add new tweet. 
4. Delete a tweet.
5. Edit a tweet. 
6. Retrieve all tweets (use paging).
7. Retrieve specific user tweets. 
8. Retrieve user info.
9. Edit my own info. 
10. Change password.
11. Follow a user. 
12. Unfollow a user.
13. Retrieve followed user’s tweets. 
14. Add tweet to a saved list.
15. Delete tweet from the saved list. 
16. Retrieve the saved tweets (use paging).
17. Hide tweet 18. Unhide tweet
19. Comment on a tweet 
20. Retrieve tweet comments (use paging).
21. Delete a tweet comment 
22. Like a tweet
23. Retrieve tweet likes (use paging). 
24. Unlike a tweet.
25. Retrieve tweet likes count



