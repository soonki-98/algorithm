import math
T = int(input())
result = []
for i in range(T):
    a, b, c = map(int, input().split())
    floor = (c % a) if c % a != 0 else (a)
    room = math.ceil(c / a)
    result.append(floor * 100 + room)

for j in range(T):
    print(result[j])