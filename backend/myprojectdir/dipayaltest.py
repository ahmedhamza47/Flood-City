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



