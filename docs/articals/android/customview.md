# Android 开发笔记


## 自定义view

抗锯齿
```java
canvas.setDrawFilter(new PaintFlagsDrawFilter(0, Paint.ANTI_ALIAS_FLAG | Paint.FILTER_BITMAP_FLAG));
```

文字与旁边的画的圆或圆角矩形中线水平对齐
```java
//获取文字的基线
private float getBaseLine(Paint paint, float centerY) {
return centerY - (paint.getFontMetricsInt().bottom + paint.getFontMetricsInt().top) / 2;
}

//绘制文字的时候             在rectFNew这个矩形右边绘制  中线水平对齐
canvas.drawText("绘制内容", rectFNew.right, getBaseLine(paint, rectFNew.centerY()), paint);
```
