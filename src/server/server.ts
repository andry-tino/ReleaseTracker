/**
 * server.ts
 * Andrea Tino - 2016
 */

/// <reference path="../definitions/commonjs.d.ts" />
/// <reference path="../definitions/node.d.ts" />

import * as http from "http"

namespace ReleaseTracker {
    /**
     * Status of the server.
     */
    export enum ServerStatus {
        Running,
        Stopped
    }

    /**
     * Server.
     */
    export class Server {
        private _status: ServerStatus;
        private port: number;
        private server: http.Server;

        /**
         * Initializes a new instance of the Server class.
         * @param port: The port number
         */
        constructor(port: number = 8080) {
            if (port < 0 || port >= Math.pow(2, 16)) {
                throw "Port must be in range [0, 2^16-1]";
            }

            this.port = port;
            this.server = http.createServer(this.processRequest);
        }

        /**
         * Gets the status of the server.
         */
        public get status(): ServerStatus {
            return this._status;
        }

        /**
         * Runs the server.
         */
        public run() {
            if (this.status == ServerStatus.Running) {
                return;
            }

            this.server.listen(this.port, this.listen);
        }

        private processRequest(request: http.IncomingMessage, response: http.ServerResponse) {

        }

        private listen() {

        }
    }
}
