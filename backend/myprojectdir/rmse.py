import requests
import numpy as np
import matplotlib.pyplot as plt
import math

headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMiIsInJvbGVfaWQiOjEsInVzZXJuYW1lIjoicHVrYXIua2hhbmFsIiwibmFtZSI6IlB1a2FyIiwiZGVzaWduYXRpb24iOiJJVCIsInBlcm1pc3Npb25zIjpbInZpZXcgcm9sZSIsIm1vZGlmeSByb2xlIiwidmlldyB1bml0IiwibW9kaWZ5IHVuaXQiLCJ2aWV3IHFjLXJ1bGUiLCJtb2RpZnkgcWMtcnVsZSIsInZpZXcgbWV0YS1kYXRhIiwibW9kaWZ5IG1ldGEtZGF0YSIsInZpZXcgdXNlciIsIm1vZGlmeSB1c2VyIiwidmlldyBkYXRhLXNvdXJjZSIsIm1vZGlmeSBkYXRhLXNvdXJjZSIsInZpZXcgc3RhdGlvbiIsIm1vZGlmeSBzdGF0aW9uIiwidmlldyBkYXRhLW9yaWdpbiIsIm1vZGlmeSBkYXRhLW9yaWdpbiIsInZpZXcgZGF0YS1zZXJpZXMiLCJtb2RpZnkgZGF0YS1zZXJpZXMiLCJ2aWV3IHBhcmFtZXRlci10eXBlIiwibW9kaWZ5IHBhcmFtZXRlci10eXBlIiwidmlldyBlZGl0LW9ic2VydmF0aW9uIiwibW9kaWZ5IGVkaXQtb2JzZXJ2YXRpb24iLCJ2aWV3IHBhcmFtZXRlciIsIm1vZGlmeSBwYXJhbWV0ZXIiLCJ2aWV3IGRhdGEtb3JpZ2luLXBhcmFtZXRlciIsIm1vZGlmeSBkYXRhLW9yaWdpbi1wYXJhbWV0ZXIiLCJ2aWV3IHBlcm1pc3Npb24iLCJtb2RpZnkgcGVybWlzc2lvbiIsInZpZXcgdGFnIiwibW9kaWZ5IHRhZyIsInZpZXcgZm9sZGVyIiwibW9kaWZ5IGZvbGRlciIsInZpZXcgcWMtY2hlY2siLCJtb2RpZnkgcWMtY2hlY2siLCJ2aWV3IGludmVudG9yeSIsIm1vZGlmeSBpbnZlbnRvcnkiLCJ2aWV3IG1haW50ZW5hbmNlIiwibW9kaWZ5IG1haW50ZW5hbmNlIiwidmlldyBkYXEtcHJvY2Vzc29yIiwibW9kaWZ5IGRhcS1wcm9jZXNzb3IiLCJ2aWV3IGd0cy1zZW5kIiwibW9kaWZ5IGd0cy1zZW5kIl0sImNsaWVudGlwIjoiMTAuMjAuMC41MCIsImlhdCI6MTY3NTA3MDY1MCwiZXhwIjoxNjc1MTU3MDUwfQ.I8WeZFGdlxyQbZZjr9TiGWt2bD1mrz61FTvmRfgFRLA"
}

response = requests.get("http://beta.wscada.net/api/analysis/more?stations=280&parameters=209&date_from=2022-12-21T00:00:00&date_to=2022-12-22T05:00:00", headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
    time_value_data = [{"time": item["time"], "value": item["value"]} for d in data for p in d["parameters"] for item in p["data"]]
    print(time_value_data) 
else:
    print("Request failed with status code: ", response.status_code)



response = requests.get("http://beta.wscada.net/api/analysis/more?stations=280&parameters=638&date_from=2022-12-21T00:00:00&date_to=2022-12-22T05:00:00", headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
    time_value_data1 = [{"time": item["time"], "value": item["value"]} for d in data for p in d["parameters"] for item in p["data"]]
    print(time_value_data1) 
else:
    print("Request failed with status code: ", response.status_code)

print(np.array(time_value_data).len());