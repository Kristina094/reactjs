n=int(input())
a=0
for i in range(1,n+1):
  if n%i==0:
    a+=i
if a-1==n:
 print("yes")
else:
 print("no")