
class UserProfile {
  constructor(firstName, lastName, picture, email, phoneNumber, facebook, myItemList, myGroupList, feedList) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.facebook = facebook;
    this.myItemList = myItemList;
    this.myGroupList = myGroupList;
    this.feedList = feedList;
    this.fullName = firstName + " " + lastName;
  }
}

class Group{
  constructor(memberList, groupItemList){
    this.memberList = memberList;
    this.groupItemList = groupItemList;
  }
}

//each user materials
var tempItemList = new Array ("Booze", "Soccer Ball", "Nuclear missle");
var tempGroupList = new Array ();
var tempFeedList  = new Array (
  "Justin Gil checked out Wayne Rooney's glue stick",
  "Leo Qiu checked out Bruno Mars's glue stick",
  "Derrick Wong checked out Minooc Choo's glue stick",
  "Scott Chen checked out Jason Hwang's glue stick",
  "Michael Cheng checked out Issac's macbook charger",
);

//each group materials
var tempMemberList = new Array("Justin Gil", "Scott Chen", "Michael Cheng", "Derrick Wong");
var tempGroupItemList = new Array("Tape", "Post it", "Rice cooker", "HDMI", "Screw driver","Vacuum cleaner");

var tempMemberList2 = new Array("Derrick Wong", "Scott Chen", "Michael Cheng", "Derrick Wong");
var tempGroupItemList2 = new Array("Tape", "Post it", "iPhone X", "desktop", "Screw driver","Vacuum cleaner");

//UserProfiles
var Me = new UserProfile("Joe", "Schmoe", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Derrick = new UserProfile("Derrick", "Wong", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Jason = new UserProfile("Jason", "Jiajun", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Leo = new UserProfile("Leo", "Qiu", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Scott = new UserProfile("Scott", "Chen", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);

//GroupProfile
var VilEast1 = new Group (tempMemberList, tempGroupItemList);
var VilWest3 = new Group (tempMemberList2, tempGroupItemList2);

var groupList =  Array(
  "Village East 1",
  "Village West 3",
);

var groupMap = {
  "Village East 1" : VilEast1,
  "Village West 3" : VilWest3 
};


//Michael? 
var Other ={
  otherFirstName : "Nico",
  otherLastName : "Nico",
  otherPicture : "pix/otherProfile.jpg",
  otherHome : "home.html",
  otherProfile : "otherProfile.html",
  otherEmail : "Rando@email.com",
  otherPhone : "(no)sue-number",
  otherFB : "fb.com/lbj",
  otherItems : "soccer ball tape beer",
  otherGroups : "Village East 1, Village East 2"
};

var comments = [
  "Joe: Hello",
  "Nico: konichiwa",
  "Joe: me borrow tape",
  "Nico: Hai Hai"
];


