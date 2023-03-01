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



