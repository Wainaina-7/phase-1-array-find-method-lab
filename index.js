// code your solution here
    function superbowlWin(arr) {
        // Find the first object with result "W" and return the year of that object
        const win = arr.find(item => item.result === "W");
        
        // Return the year of the win, or undefined if no win is found
        return win ? win.year : undefined;
      }
    