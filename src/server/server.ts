/**
 * server.ts
 * Andrea Tino - 2016
 */

/// <reference path="../definitions/commonjs.d.ts" />

var http = require("http");

namespace ReleaseTracker {
    /**
     * Server.
     */
    export class Server {
        private port: number;

        /**
         * Initializes a new instance of the Server class.
         */
        constructor(port: number) {
            if (port < 0 || port >= Math.pow(2, 16)) {
                throw "Port must be in range [0, 2^16-1]";
            }

            this.port = port;
        }

        /**
         * Runs the server.
         */
        public run() {
            
        }
    }
}
