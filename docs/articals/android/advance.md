## Handler通信(线程切换的原理)
子线程发送消息到消息队列，主线程对应的`Loop`会死循环的抽取队列里面的消息，通过`Message msg = me.mQueue.next()`拿到任务。通过`Handler`的`msg.taget.dispatchMessage(msg)`分发消息。
