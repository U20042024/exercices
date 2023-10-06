N1= float(input("write the first mark : "))
N2= float(input("write the second mark : "))
N3= float(input("write the third mark : "))
while N1 > 20 or N1 < 0 :
    N1= float(input("write the first mark correctly : "))
while N2 > 20 or N2 < 0 :
    N2= float(input("write the second mark correctly : "))
while N3 > 20 or N3 < 0 :
    N3= float(input("write the third mark correctly : "))
M = (N1 + N2 + N3 )/3
if M >= 16 :
    average = "very good"
elif M >= 14 and M < 16 :
    average = "good"
elif M >= 12 and M <14:
    average = "OK "
elif M >= 10 and M < 12 :
        average = "Acceptable"
elif M < 10 :
     average = "insufficient"
     print("your average is :", M , "it's :" , average)


