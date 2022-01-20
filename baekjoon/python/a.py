a = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
for i in range(3):
    for j in range(len(a[i])):
        if (a[i][j] % 3 == 0):
            print(a[i][j])
