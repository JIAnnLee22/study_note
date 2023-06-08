使用该命令`adb shell pm list package -3 | awk -F ':' '{print $2}' | xargs -I {} adb uninstall {}`卸载所有第三方应用，跟还原出厂设置的区别就是，这个命令只是卸载了应用，所有除了应用数据之外的数据都是保留的
