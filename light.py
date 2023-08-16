import cv2 as cv
video_capture=cv.VideoCapture(0)
def nolight():
	return video_capture.read()