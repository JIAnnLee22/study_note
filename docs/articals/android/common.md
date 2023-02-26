## 软键盘自动顶起布局

```xml
<!-- 放在顶级布局里,如果是fragment放在依赖的activity根布局-->
android:fitSystemWindows="true"
```

```xml
<!-- 放在androidManifest.xml里对应的activity-->
<activity name="xxx" android:windowSoftInputMode="stateHidden|adjustResize">
```

## 输入框光标到最后
```java
editText.setSelection(editText.getText().length())
```

## 键盘回车完成监听

布局xml代码

```xml
android:imeOptions="actionDone"
android:singleLine="true"
```

java代码监听

```java
editText.setOnEditorActionListner((view, actionId, keyEvent)-> {
    if (actionId == EditorInfo.IME_ACTION_DONE) {
        //todo something
    }
    return false;
});
```

## Service组件
启动方式：1.`startService()` 2.`bindService()` 
取消服务：1.`stopService(Intent intent)`传入`startService(Intent intent)`中的`intent`参数 2.在`Service`中调用`stopSelf()`销毁自己