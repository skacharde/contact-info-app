export  class Constants{
    public static DELETE_TOAST_TITLE : string = 'Deleted';
    public static DELETE_TOAST_MESSAGE : string = 'Record Successfully deleted';

    public static ADD_TOAST_TITLE : string = 'Saved';
    public static ADD_TOAST_MESSAGE : string = 'Record Successfully added';

    public static UPDATE_TOAST_TITLE : string = 'Saved';
    public static UPDATE_TOAST_MESSAGE : string = 'Record Successfully updated';

    public static ALREADY_EXIST_TOAST_TITLE : string = 'Duplicate';
    public static ALREADY_EXIST_TOAST_MESSAGE : string = 'Record already exist';

    //We can add this url to enviornment.ts file as well 
    //public static BASE_URL = 'http://localhost:3000/contacts';
    public static BASE_URL = 'https://cl-fake-server-app.herokuapp.com/contacts';
}