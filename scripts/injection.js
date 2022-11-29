API = {
    Logging: {
        Log: function(text) { 
            console.log(`%c[%cMist%cCord%c]%c ${text}`, 'color: white;', 'color: #70c6f4;', 'color: #17a4ef;', 'color: white;', 'color: rgb(200,200,200);')
        },

        Error: function(text) {
            console.log(`%c[%cMist%cCord%c]%c ${text}`, 'color: white;', 'color: #70c6f4;', 'color: #17a4ef;', 'color: white;', 'color: rgb(200,200,200);')
        },

        Success(text) { 
            console.log(`%c[%cMist%cCord%c]%c ${text}`, 'color: white;', 'color: #70c6f4;', 'color: #17a4ef;', 'color: white;', 'color: rgb(200,200,200);')
        }
    },

    Client: {
        Modal: function(text) {
            let body = document.getElementsByClassName('app-3xd6d0');
            body.innerHTML += `
            <div class="toaster toaster-right-top toasting" id="injection_modal" style="border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(9.3px); -webkit-backdrop-filter: blur(9.3px); border: 1px solid rgba(51, 53, 63, 0.63); border-radius: 5px;">${text}</div>
            `
            document.getElementById('injection_modal').onclick = function() {
                this.remove();
            };
        }   
    },

    Utility: {
        Sleep: function(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        },

        InjectHTML: function(id, html) {
            document.getElementById(id).innerHTML += html
        },

        SpoofEmail: function(email) {
            window.webpackChunkdiscord_app.push([
                [Math.random()], {}, (req) => {
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                        if (m.default && m.default.getCurrentUser !== undefined) {
                            return m.default.getCurrentUser().email = email;
                        }

                        if (m.getCurrentUser !== undefined) {
                            return m.getCurrentUser().email = email
                        }
                    }
                }
            ]);
        }
    }
};

// b7b5f8444374c1b55cff.js

API.Client.Modal('Injected MistCord');
