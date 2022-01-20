N = int(input())
a = input().split(" ")
a = sorted(list(map(int, a)))
print(a[0], a[N - 1])