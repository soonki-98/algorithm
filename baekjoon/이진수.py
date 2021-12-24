N = int(input())

list1 = []

for i in range(N):
    a = int(input())    
    a = list(format(a, 'b'))
    a.reverse()
    e = []
    for j in range(len(a)):
        if a[j] == "1":
            e.append(str(j))
    list1.append(e)

for k in range(N):
    print(" ".join(list1[k]))