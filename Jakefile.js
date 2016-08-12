/**
 * Build system.
 */

(function() {
  var fs = require("fs");
  var path = require("path");
  var glob = require("glob").sync;
  var execFile = require("child_process").execFileSync;
  var tsc = require("typescript");
  var sass = require("sass");
  
  // Platform
  var platform = process.platform;
  
  // Tasks
  // Compile -------------------------------------
  desc("Builds the project and all source files.");
  task("default", function() {
    console.log("Building...");
    compile();
    
    // Move output files from src to out
    console.log("Moving output files...");
    moveOutputFiles();
    
    console.log("Build done!");
  });
  
  // Cleanup -------------------------------------------------------------
  desc("Removes output files from source locations and cleans up folders");
  task("cleanup", function() {
    var files = getOutputFiles();
    console.log("Cleaning up output folder...");
    
    // TODO
    tsc.transpile("input", {}, "fileName");

    console.log("Cleanup done!");
  });
  
  function compile() {
    console.log("Compilation done!");
  }
})();