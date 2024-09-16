#Bài tập 5: Hàm kiểm tra số nguyên tố 
#Yêu cầu: Viết một hàm is_prime(n) nhận một tham số là số nguyên n, trả về True nếu n 
#là số nguyên tố, ngược lại trả về False.


def tinh_giai_thua(n):
    if n == 0:
        return 1
    else:
        return n * tinh_giai_thua(n - 1)

n = 3
print(n,"! = ", tinh_giai_thua(n))   