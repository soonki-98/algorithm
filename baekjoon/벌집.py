N = int(input())
a = 2
i = 1
while True:
    if a > N:
        break
    else:
        a += 6 * i
        i += 1
print(i)
