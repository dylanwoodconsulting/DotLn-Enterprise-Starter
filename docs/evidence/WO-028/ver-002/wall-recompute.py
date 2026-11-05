# Independent recomputation of the wall study: shares no code with the model.
import math,sys
def run(goalY,ray=9.0,steps=80):
    x,y,vx,vy=0.0,0.0,4.0,0.0; hx,hy=1.0,0.0
    wx,wb,wt,rad,avoid,ms,ma,dt=10.0,-6.0,6.0,1.0,6.0,4.0,8.0,0.1
    out=[]
    for i in range(steps+1):
        sp=math.hypot(vx,vy); dx,dy=(vx/sp,vy/sp) if sp else (hx,hy)
        ex,ey=x+dx*ray,y+dy*ray
        hit=None
        # intersect (x,y)->(ex,ey) with the vertical segment
        if ex!=x:
            t=(wx-x)/(ex-x)
            if 0<=t<=1:
                yy=y+t*(ey-y)
                if wb<=yy<=wt: hit=(wx,yy,-1.0 if ex>x else 1.0)
        tx,ty=(hit[0]+hit[2]*avoid,hit[1]) if hit else (18.0,goalY)
        ox,oy=tx-x,ty-y; d=math.hypot(ox,oy)
        ax,ay=(ox/d*ma,oy/d*ma) if d>0 else (0.0,0.0)
        cy=max(wb,min(wt,y)); c=math.hypot(x-wx,y-cy)-rad
        out.append(dict(i=i,x=x,y=y,vx=vx,vy=vy,ax=ax,ay=ay,hit=hit,c=c))
        vx+=ax*dt; vy+=ay*dt; sp=math.hypot(vx,vy)
        if sp>ms: vx,vy=vx/sp*ms,vy/sp*ms
        x+=vx*dt; y+=vy*dt
        if sp>0: s=math.hypot(vx,vy); hx,hy=vx/s,vy/s
    return out
d=run(15.0); h=run(0.0)
f=next(r['i'] for r in d if r['hit']); t=next(r['i'] for r in d if r['hit'] and abs(r['ay'])>abs(r['ax']))
hits=[r['i'] for r in d if r['hit']]
m=min(d,key=lambda r:r['c'])
print('default first hit',f,'first turning',t,'hit frames',hits[0],hits[-1],len(hits))
print('smallest clearance frame',m['i'],round(m['c'],2),'pos',round(m['x'],2),round(m['y'],2))
print('frame5',{k:(round(v,2) if isinstance(v,float) else v) for k,v in d[5].items() if k!='hit'})
print('end',round(d[-1]['x'],2),round(d[-1]['y'],2),'vel',round(d[-1]['vx'],2),round(d[-1]['vy'],2),'clear',round(d[-1]['c'],2))
for i in (0,5,10,15,20,25,29,30,35,40,50,60,70,80):
    r=d[i]; print(i,'pos',round(r['x'],2),round(r['y'],2),'vel',round(r['vx'],2),round(r['vy'],2),'hit',bool(r['hit']),'clear',round(r['c'],2))
print('min distance to delivery',round(min(math.hypot(r['x']-18,r['y']-15) for r in d),2),'first frame within 1:',next((r['i'] for r in d if math.hypot(r['x']-18,r['y']-15)<1),None))
mh=min(h,key=lambda r:r['c'])
print('head-on min clearance',round(mh['c'],2),'frame',mh['i'],'end',round(h[-1]['x'],2),round(h[-1]['y'],2),'largest |y|',round(max(abs(r['y']) for r in h),2),'hit frames',sum(1 for r in h if r['hit']),'min x-dist',round(min(abs(10-r['x']) for r in h),2))
print('head-on sign changes of vx',sum(1 for a,b in zip(h,h[1:]) if a['vx']*b['vx']<0))
for ray in (0.5,1.0):
    q=run(15.0,ray=ray); print('ray',ray,'hit frames',sum(1 for r in q if r['hit']),'min clear',round(min(r['c'] for r in q),2))
print('--- counterfactual: same run with the ray too short to hit')
a=run(15.0,ray=9.0); b=run(15.0,ray=0.5)
for i in (5,6,7,8,10,15,20,29,35):
    print(i,'with ray',round(a[i]['x'],2),round(a[i]['y'],2),'heading',round(math.degrees(math.atan2(a[i]['vy'],a[i]['vx'])),1),'| without',round(b[i]['x'],2),round(b[i]['y'],2),'heading',round(math.degrees(math.atan2(b[i]['vy'],b[i]['vx'])),1))
print('--- offered combinations: hit frames, min clearance')
best=[]
for g in range(0,19):
    for k in range(1,25):
        q=run(float(g),ray=k*0.5)
        hits=[r['i'] for r in q if r['hit']]
        best.append((len(hits),g,k*0.5,round(min(r['c'] for r in q),2),round(q[-1]['x'],1),round(q[-1]['y'],1)))
for row in sorted(best,reverse=True)[:12]: print(row)
print('goalY 15 by ray',[ (t[2],t[0],t[3]) for t in sorted(best,key=lambda t:t[2]) if t[1]==15])
