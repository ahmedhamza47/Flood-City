import calendar
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb
from sklearn.metrics import mean_squared_error


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



