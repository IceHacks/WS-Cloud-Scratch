(() => {
    var ext = this;

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

    ext.new_connection = (host) => {
        var sid = data.sockets.push(new WebSocket(host));
        var mid = data.messages.push("");
        var socket = data.sockets[id];
        socket.onmessage = (message) => {
            data.messages[mid] = message.data;
        }

        return sid;
    };
    
    ext.check_message = (id) => {
        return data.messages[id];
    };

    ext.send_message = (data, id) => {
        data.sockets[id].send(data);
    }

    const descriptor = {
        blocks: [
            ["r", "Connect %s", "new_connection", "localhost:2772"],
            ["r", "Message %n", "check_message", 0],
            [" ", "Send %s %n", "send_message", "hello world", 0]
        ]
    };

    ScratchExtensions.register("WSCloud Scratch", descriptor, ext);
})();