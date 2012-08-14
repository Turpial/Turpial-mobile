

window.serviceListener = function() {
    
    var listenService = false;
    
    function activate() {
        listenService = true;
    }
    
    function deactivate() {
        listenService = false;
    }
    
    function sendStuff(content) {
        if(listenService == false)
            return;
        
        var tweetList = "";
        
        var messageText = "Hi Turpial human users!I arrive from the service uh uh uh zoapo apsofasdf";
        
        var values = { avatar : "pixmaps/mentionsdummy.png", username: "@4ndreaSt4gi", 
                message: messageText, reposted_by : "Retweeted by Service",
                timestamp : "1m"}
        
        templates.getTemplate("templates/mobile-status.partial", function(template) {
            tweetList = templates.fillTemplate(template, values);
            $('#timeline-page').html(tweetList + $('#timeline-page').html());
        });
    };
    
    return {
        sendStuff: sendStuff,
        activate: activate,
        deactivate: deactivate
    };
}();
