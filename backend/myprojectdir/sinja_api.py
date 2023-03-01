import calendar
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb
from sklearn.metrics import mean_squared_error
from flask import Flask, jsonify


df = pd.read_csv('sinja_all.csv')

df = df.set_index('dateTime')
df.index = pd.to_datetime(df.index)
#df.plot(style='.',title='Water Level in m')

train=df.loc[df.index < '01-01-2021']
test=df.loc[df.index >= '01-01-2021']
#train.plot(style='.',title='training set')
#test.plot(style='.',title='testing set')
def create_features(df):
    df = df.copy()
    df['hour'] = df.index.hour
    df['dayofweek'] = df.index.dayofweek
    df['quarter'] = df.index.quarter
    df['month'] = df.index.month
    df['year'] = df.index.year
    df['dayofyear'] = df.index.dayofyear
    df['dayofmonth'] = df.index.day
    df['weekofyear'] = df.index.isocalendar().week
    return df

df = create_features(df)

train = create_features(train)
test = create_features(test)

FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month', 'year']
TARGET = 'value'
X_train = train[FEATURES]
y_train = train[TARGET]
X_test = test[FEATURES]
y_test = test[TARGET]
reg = xgb.XGBRegressor(base_score=0.5, booster='gbtree',    
                       n_estimators=10000,
                       early_stopping_rounds=100,
                       objective='reg:linear',
                       max_depth=4,
                       learning_rate=0.001)
reg.fit(X_train, y_train,
        eval_set=[(X_train, y_train), (X_test, y_test)],
        verbose=300)
print("sinja model complete")

#test['prediction'] = reg.predict(X_test)
#df = df.merge(test[['prediction']], how='left', left_index=True, right_index=True)
#ax = df[['value']].plot(figsize=(15, 5))
#df['prediction'].plot(ax=ax, style='.')
#plt.legend(['Truth Data', 'Predictions'])
#ax.set_title('Raw Dat and Prediction')
#plt.show()
#score = np.sqrt(mean_squared_error(test['value'], test['prediction']))
#print(f'RMSE Score on Test set: {score:0.2f}')


#chisapani

df_chisapani = pd.read_csv('chisapani_all.csv')

df_chisapani = df_chisapani.set_index('dateTime')
df_chisapani.index = pd.to_datetime(df_chisapani.index)
#df_chisapani.plot(style='.',title='Water Level in m')

df_chisapani['value'] = pd.to_numeric(df_chisapani['value'], errors='coerce')
df_chisapani['value'].replace('',pd.np.nan)
df_chisapani['value'].replace(' ',pd.np.nan)
df_chisapani['value'] = df_chisapani['value'].interpolate()

train_chisapani=df_chisapani.loc[df_chisapani.index < '01-01-2021']
test=df_chisapani.loc[df_chisapani.index >= '01-01-2021']
train_chisapani.plot(style='.',title='training set')
test.plot(style='.',title='testing set')
def create_features(df_chisapani):
    df_chisapani = df_chisapani.copy()
    df_chisapani['hour'] = df_chisapani.index.hour
    df_chisapani['dayofweek'] = df_chisapani.index.dayofweek
    df_chisapani['quarter'] = df_chisapani.index.quarter
    df_chisapani['month'] = df_chisapani.index.month
    df_chisapani['year'] = df_chisapani.index.year
    df_chisapani['dayofyear'] = df_chisapani.index.dayofyear
    df_chisapani['dayofmonth'] = df_chisapani.index.day
    df_chisapani['weekofyear'] = df_chisapani.index.isocalendar().week
    return df_chisapani

df_chisapani = create_features(df_chisapani)

train_chisapani = create_features(train_chisapani)
test = create_features(test)

FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month', 'year']
TARGET = 'value'
X_train_chisapani = train_chisapani[FEATURES]
y_train_chisapani = train_chisapani[TARGET]
X_test = test[FEATURES]
y_test = test[TARGET]
reg_chisapani = xgb.XGBRegressor(base_score=0.5, booster='gbtree',    
                       n_estimators=10000,
                       early_stopping_rounds=100,
                       objective='reg:linear',
                       max_depth=4,
                       learning_rate=0.001)
reg_chisapani.fit(X_train_chisapani, y_train_chisapani,
        eval_set=[(X_train_chisapani, y_train_chisapani), (X_test, y_test)],
        verbose=300)


test['prediction'] = reg_chisapani.predict(X_test)
# df_chisapani = df_chisapani.merge(test[['prediction']], how='left', left_index=True, right_index=True)
# ax = df_chisapani[['value']].plot(figsize=(15, 5))
# df_chisapani['prediction'].plot(ax=ax, style='.')
# plt.legend(['Truth Data', 'Predictions'])
# ax.set_title('Raw Dat and Prediction')
# plt.show()
score = np.sqrt(mean_squared_error(test['value'], test['prediction']))
print(f'RMSE Score on Test set: {score:0.2f}')
print("chisapani model complete")
#Dipayal

import calendar
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb
from sklearn.metrics import mean_squared_error


df_dipayal = pd.read_csv('dipayal_all.csv')

df_dipayal = df_dipayal.set_index('dateTime')
df_dipayal.index = pd.to_datetime(df_dipayal.index)
#df_dipayal.plot(style='.',title='Water Level in m')

df_dipayal['value'] = pd.to_numeric(df_dipayal['value'], errors='coerce')
df_dipayal['value'].replace('',pd.np.nan)
df_dipayal['value'].replace(' ',pd.np.nan)
df_dipayal['value'] = df_dipayal['value'].interpolate()

train_dipayal=df_dipayal.loc[df_dipayal.index < '01-01-2021']
test=df_dipayal.loc[df_dipayal.index >= '01-01-2021']
train_dipayal.plot(style='.',title='training set')
test.plot(style='.',title='testing set')
def create_features(df_dipayal):
    df_dipayal = df_dipayal.copy()
    df_dipayal['hour'] = df_dipayal.index.hour
    df_dipayal['dayofweek'] = df_dipayal.index.dayofweek
    df_dipayal['quarter'] = df_dipayal.index.quarter
    df_dipayal['month'] = df_dipayal.index.month
    df_dipayal['year'] = df_dipayal.index.year
    df_dipayal['dayofyear'] = df_dipayal.index.dayofyear
    df_dipayal['dayofmonth'] = df_dipayal.index.day
    df_dipayal['weekofyear'] = df_dipayal.index.isocalendar().week
    return df_dipayal

df_dipayal = create_features(df_dipayal)

train_dipayal = create_features(train_dipayal)
test = create_features(test)

FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month', 'year']
TARGET = 'value'
X_train_dipayal = train_dipayal[FEATURES]
y_train_dipayal = train_dipayal[TARGET]
X_test = test[FEATURES]
y_test = test[TARGET]
reg_dipayal = xgb.XGBRegressor(base_score=0.5, booster='gbtree',    
                       n_estimators=10000,
                       early_stopping_rounds=100,
                       objective='reg:linear',
                       max_depth=4,
                       learning_rate=0.001)
reg_dipayal.fit(X_train_dipayal, y_train_dipayal,
        eval_set=[(X_train_dipayal, y_train_dipayal), (X_test, y_test)],
        verbose=300)


test['prediction'] = reg_dipayal.predict(X_test)
# df_dipayal = df_dipayal.merge(test[['prediction']], how='left', left_index=True, right_index=True)
# ax = df_dipayal[['value']].plot(figsize=(15, 5))
# df_dipayal['prediction'].plot(ax=ax, style='.')
# plt.legend(['Truth Data', 'Predictions'])
# ax.set_title('Raw Dat and Prediction')
# plt.show()
score = np.sqrt(mean_squared_error(test['value'], test['prediction']))
print(f'RMSE Score on Test set: {score:0.2f}')



print("dipayal model complete")


#humla_karnali

import calendar
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb
from sklearn.metrics import mean_squared_error


df_humla_karnali = pd.read_csv('humla_karnali_all.csv')

df_humla_karnali = df_humla_karnali.set_index('dateTime')
df_humla_karnali.index = pd.to_datetime(df_humla_karnali.index)
#df_humla_karnali.plot(style='.',title='Water Level in m')

df_humla_karnali['value'] = pd.to_numeric(df_humla_karnali['value'], errors='coerce')
df_humla_karnali['value'].replace('',pd.np.nan)
df_humla_karnali['value'].replace(' ',pd.np.nan)
df_humla_karnali['value'] = df_humla_karnali['value'].interpolate()

train_humla_karnali=df_humla_karnali.loc[df_humla_karnali.index < '01-01-2021']
test=df_humla_karnali.loc[df_humla_karnali.index >= '01-01-2021']
train_humla_karnali.plot(style='.',title='training set')
test.plot(style='.',title='testing set')
def create_features(df_humla_karnali):
    df_humla_karnali = df_humla_karnali.copy()
    df_humla_karnali['hour'] = df_humla_karnali.index.hour
    df_humla_karnali['dayofweek'] = df_humla_karnali.index.dayofweek
    df_humla_karnali['quarter'] = df_humla_karnali.index.quarter
    df_humla_karnali['month'] = df_humla_karnali.index.month
    df_humla_karnali['year'] = df_humla_karnali.index.year
    df_humla_karnali['dayofyear'] = df_humla_karnali.index.dayofyear
    df_humla_karnali['dayofmonth'] = df_humla_karnali.index.day
    df_humla_karnali['weekofyear'] = df_humla_karnali.index.isocalendar().week
    return df_humla_karnali

df_humla_karnali = create_features(df_humla_karnali)

train_humla_karnali = create_features(train_humla_karnali)
test = create_features(test)

FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month', 'year']
TARGET = 'value'
X_train_humla_karnali = train_humla_karnali[FEATURES]
y_train_humla_karnali = train_humla_karnali[TARGET]
X_test = test[FEATURES]
y_test = test[TARGET]
reg_humla_karnali = xgb.XGBRegressor(base_score=0.5, booster='gbtree',    
                       n_estimators=10000,
                       early_stopping_rounds=100,
                       objective='reg:linear',
                       max_depth=4,
                       learning_rate=0.001)
reg_humla_karnali.fit(X_train_humla_karnali, y_train_humla_karnali,
        eval_set=[(X_train_humla_karnali, y_train_humla_karnali), (X_test, y_test)],
        verbose=300)


test['prediction'] = reg_humla_karnali.predict(X_test)
# df_humla_karnali = df_humla_karnali.merge(test[['prediction']], how='left', left_index=True, right_index=True)
# ax = df_humla_karnali[['value']].plot(figsize=(15, 5))
# df_humla_karnali['prediction'].plot(ax=ax, style='.')
# plt.legend(['Truth Data', 'Predictions'])
# ax.set_title('Raw Dat and Prediction')
# plt.show()
score = np.sqrt(mean_squared_error(test['value'], test['prediction']))
print(f'RMSE Score on Test set: {score:0.2f}')


print("humla_karlali model complete")


#sanobheri 

df_sanobheri = pd.read_csv('sanobheri_all.csv')

df_sanobheri = df_sanobheri.set_index('dateTime')
df_sanobheri.index = pd.to_datetime(df_sanobheri.index)


df_sanobheri['value'] = pd.to_numeric(df_sanobheri['value'], errors='coerce')
df_sanobheri['value'].replace('',pd.np.nan)
df_sanobheri['value'].replace(' ',pd.np.nan)
df_sanobheri['value'] = df_sanobheri['value'].interpolate()

train_sanobheri=df_sanobheri.loc[df_sanobheri.index < '01-01-2021']
test=df_sanobheri.loc[df_sanobheri.index >= '01-01-2021']
train_sanobheri.plot(style='.',title='training set')
test.plot(style='.',title='testing set')
def create_features(df_sanobheri):
    df_sanobheri = df_sanobheri.copy()
    df_sanobheri['hour'] = df_sanobheri.index.hour
    df_sanobheri['dayofweek'] = df_sanobheri.index.dayofweek
    df_sanobheri['quarter'] = df_sanobheri.index.quarter
    df_sanobheri['month'] = df_sanobheri.index.month
    df_sanobheri['year'] = df_sanobheri.index.year
    df_sanobheri['dayofyear'] = df_sanobheri.index.dayofyear
    df_sanobheri['dayofmonth'] = df_sanobheri.index.day
    df_sanobheri['weekofyear'] = df_sanobheri.index.isocalendar().week
    return df_sanobheri

df_sanobheri = create_features(df_sanobheri)

train_sanobheri = create_features(train_sanobheri)
test = create_features(test)

FEATURES = ['dayofyear', 'hour', 'dayofweek', 'quarter', 'month', 'year']
TARGET = 'value'
X_train_sanobheri = train_sanobheri[FEATURES]
y_train_sanobheri = train_sanobheri[TARGET]
X_test = test[FEATURES]
y_test = test[TARGET]
reg_sanobheri = xgb.XGBRegressor(base_score=0.5, booster='gbtree',    
                       n_estimators=10000,
                       early_stopping_rounds=100,
                       objective='reg:linear',
                       max_depth=4,
                       learning_rate=0.001)
reg_sanobheri.fit(X_train_sanobheri, y_train_sanobheri,
        eval_set=[(X_train_sanobheri, y_train_sanobheri), (X_test, y_test)],
        verbose=300)


test['prediction'] = reg_sanobheri.predict(X_test)

score = np.sqrt(mean_squared_error(test['value'], test['prediction']))
print(f'RMSE Score on Test set: {score:0.2f}')

print("sanobheri model complete")

app = Flask(__name__)

@app.route('/forecast/sinja/<int:date>')
def function_sinja(date):
    date_str = str(date)
    formatted_date_str = f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:]}"
    date_str = datetime.strptime(formatted_date_str, '%Y-%m-%d')  
    date_str.strftime('%Y-%m-%d')
    date_object = pd.to_datetime(date_str)
    date_to_predict = pd.DataFrame({'dayofyear': date_object.dayofyear, 'hour': [0], 'dayofweek': date_object.dayofweek, 'quarter':(date_object.month - 1) // 3 + 1, 'month': date_object.month, 'year': date_object.year})
    predicted_value = reg.predict(date_to_predict)
    val=str(predicted_value[0])
    return val

@app.route('/forecast/chisapani/<int:date>')
def function_chisapani(date):
    date_str = str(date)
    formatted_date_str = f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:]}"
    date_str = datetime.strptime(formatted_date_str, '%Y-%m-%d')  
    date_str.strftime('%Y-%m-%d')
    date_object = pd.to_datetime(date_str)
    date_to_predict = pd.DataFrame({'dayofyear': date_object.dayofyear, 'hour': [0], 'dayofweek': date_object.dayofweek, 'quarter':(date_object.month - 1) // 3 + 1, 'month': date_object.month, 'year': date_object.year})
    predicted_value = reg_chisapani.predict(date_to_predict)
    val=str(predicted_value[0])
    return val

@app.route('/forecast/dipayal/<int:date>')
def function_dipayal(date):
    date_str = str(date)
    formatted_date_str = f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:]}"
    date_str = datetime.strptime(formatted_date_str, '%Y-%m-%d')  
    date_str.strftime('%Y-%m-%d')
    date_object = pd.to_datetime(date_str)
    date_to_predict = pd.DataFrame({'dayofyear': date_object.dayofyear, 'hour': [0], 'dayofweek': date_object.dayofweek, 'quarter':(date_object.month - 1) // 3 + 1, 'month': date_object.month, 'year': date_object.year})
    predicted_value = reg_dipayal.predict(date_to_predict)
    val=str(predicted_value[0])
    return val

@app.route('/forecast/humla_karnali/<int:date>')
def function_humla_karnali(date):
    date_str = str(date)
    formatted_date_str = f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:]}"
    date_str = datetime.strptime(formatted_date_str, '%Y-%m-%d')  
    date_str.strftime('%Y-%m-%d')
    date_object = pd.to_datetime(date_str)
    date_to_predict = pd.DataFrame({'dayofyear': date_object.dayofyear, 'hour': [0], 'dayofweek': date_object.dayofweek, 'quarter':(date_object.month - 1) // 3 + 1, 'month': date_object.month, 'year': date_object.year})
    predicted_value = reg_humla_karnali.predict(date_to_predict)
    val=str(predicted_value[0])
    return val


if __name__ == '__main__':
    app.run(host='192.168.0.101',port=8000)


