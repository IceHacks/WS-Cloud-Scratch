((ext) => {
    const data = {
        sockets: [],
        messages: []
    };
    ext._shutdown = () => {};
    ext._getStatus = () => {
        return {
            status: 2,
            msg: "Ready"
        };
    }

    ext.newConnection = (host) => {
        var sid = data.sockets.push(new WebSocket(host));
        var mid = data.messages.push("");
        var socket = data.sockets[id];
        socket.onmessage = (message) => {
            data.messages[mid] = message.data;
        }

        return sid;
    };
    
    ext.checkMessage = (id) => {
        return data.messages[id];
    };

    ext.sendMessage = (data, id) => {
        data.sockets[id].send(data);
    }

    const descriptor = {
        blocks: [
            ["r", "Connect %s", "newConnection", "localhost:2772"],
            ["r", "Message %n", "checkMessage", 0],
            [" ", "Send %s %n", "sendMessage", "hello world", 0]
        ]
    };

    ScratchExtensions.register("WSCloud Scratch", descriptor, ext);
})();