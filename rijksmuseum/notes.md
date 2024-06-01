Component AuthContext :

ln 101 : email:user.email! => we use ! because in firebase the property email (user.email) is typed as string|null. One the posibilities ios to use ! (non-nullable operator, https://www.geeksforgeeks.org/typescript-non-null-assertion-operator-postfix-type/ ) to say to TS that when we use it , email cannot be null.

Remember that if you declare a variable in the global scope, it can be accessed from inside of a function , but if you declare a variable inside a function, it will be known only inside of the function
