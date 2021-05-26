def bottle_song(num):
	# write your code here!
	if(num==1):
		print("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
		bottle_song(0)
	elif(num==0):
		print("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall")
	else:
		print(str(num)+" bottles of beer on the wall, "+str(num)+" bottles of beer. Take one down and pass it around, "+str(num-1)+" bottles of beer on the wall.")
		bottle_song(num-1)

bottle_song(99)
