DFRobotMaqueenPluss.I2CInit()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readeBox(1, Content1.width) < 120) {
            if (huskylens.readeBox(1, Content1.xCenter) > 140 && huskylens.readeBox(1, Content1.xCenter) < 180) {
                DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 60)
            }
            if (huskylens.readeBox(1, Content1.xCenter) < 140) {
                DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 30)
                DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 90)
            }
            if (huskylens.readeBox(1, Content1.xCenter) > 180) {
                DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 90)
                DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 30)
            }
        } else {
            DFRobotMaqueenPluss.mototStop(Motors.ALL)
        }
    }
})
