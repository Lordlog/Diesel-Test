let leaderboard = [200, 100, 100, 50, 10];
let point = [20, 80, 80, 10, 10, 300];
function rank(newPoint) {
    let newLeaderboard = leaderboard.concat(newPoint);
    console.log(newLeaderboard.concat(point).sort());
    // console.log(newPoint.findIndex(newLeaderboard));
    let findIdx = new Array();
    for (i = 0; i < newLeaderboard.length; i++) {
        for (z = 0; z < newPoint.length; z++) {
            if (newLeaderboard[i] == newPoint[z]) {
                let idx = newLeaderboard.indexOf(newLeaderboard[i]);
                ary.push(idx);
            }
        }
    }
    return findIdx;
}

rank([11, 22, 33]);