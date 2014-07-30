Meteor.methods({
    
    printToConsole: function(result) {
        check(result, String);
        console.log(result);
    }
});
