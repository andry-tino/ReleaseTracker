/**
 * Build system.
 */

(function() {
  var fs = require("fs");
  var path = require("path");
  var exec = require("child_process").execSync;

  var tsc = require("typescript");
  var sass = require("sass");
  
  // Platform
  var platform = process.platform;
  
  // Tasks
  // Compile -------------------------------------
  desc("Builds the project and all source files.");
  task("default", function() {
    console.log("Building...");

    // Compile to out folder
    compile();

    // Copy remaining files to out folder
    fs.createReadStream('src/index.html').pipe(fs.createWriteStream('out/index.html'));
    
    console.log("Build done!");
  });
  
  // Cleanup -------------------------------------------------------------
  desc("Removes output files from source locations and cleans up folders");
  task("cleanup", function() {
    var files = getOutputFiles();
    console.log("Cleaning up output folder...");
    
    // TODO

    console.log("Cleanup done!");
  });
  
  function compile() {
    var compiler = "tsc.js";
    var node = "node";
    var execPath = path.join(
        "node_modules", 
        "typescript", 
        "lib", 
        compiler);
    
    exec(node + " " + execPath + " " + "--project src");
  }
})();