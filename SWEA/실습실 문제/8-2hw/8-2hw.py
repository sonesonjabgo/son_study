class Point():
    def __init__(self, x, y):
        self.x = x
        self.y = y

# print(Point(4,3))


class Rectangle(Point):
    def __init__(self, p1, p2):
        if p1.x > p2.x:
            self.p1 = p1.x - p2.x
        else:
            self.p1 = p2.x - p1.x

        if p1.y > p2.y:
            self.p2 = p1.y - p2.y
        else:
            self.p2 = p2.y - p2.y
        
    
    def get_area(self):
        return self.p1 * self.p2

    def get_perimeter(self):
        return (self.p1 + self.p2) * 2

    def is_square(self):
        return self.p1 == self.p2




# # 입력 예시
p1 = Point(1, 3)
p2 = Point(3, 1)
r1 = Rectangle(p1, p2)
print(r1.get_area())
print(r1.get_perimeter())
print(r1.is_square())

p3 = Point(3, 7)
p4 = Point(6, 4)
r2 = Rectangle(p3, p4)
print(r2.get_area())
print(r2.get_perimeter())
print(r2.is_square())

# 출력 예시
# 4
# 8
# True

# 9
# 12
# True