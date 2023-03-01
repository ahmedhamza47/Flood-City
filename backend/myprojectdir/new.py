import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb
from sklearn.metrics import mean_squared_error

df = pd.read_csv('all.csv')

df = df.set_index('dateTime')
df.index = pd.to_datetime(df.index)
df.plot(style='.',title='Water Level in m')

train=df.loc[df.index < '01-01-2021']
test=df.loc[df.index >= '01-01-2021']
train.plot(style='.',title='training set')
test.plot(style='.',title='testing set')
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


test['prediction'] = reg.predict(X_test)
df = df.merge(test[['prediction']], how='left', left_index=True, right_index=True)
ax = df[['value']].plot(figsize=(15, 5))
df['prediction'].plot(ax=ax, style='.')
plt.legend(['Truth Data', 'Predictions'])
ax.set_title('Raw Dat and Prediction')
plt.show()
score = np.sqrt(mean_squared_error(test['value'], test['prediction']))


print(f'RMSE Score on Test set: {score:0.2f}')

from datetime import date
date_str = datetime.now().strftime("%Y-%m-%d")
date_object = pd.to_datetime(date_str)
i=0;
while i<30:
    dt=date_object.dayofyear+i
    date_to_predict = pd.DataFrame({'dayofyear': dt, 'hour': [0], 'dayofweek': date_object.dayofweek, 'quarter': [1], 'month': [1], 'year': [2022]})
    predicted_value = reg.predict(date_to_predict)
    print(predicted_value)
    print(dt)
    i=i+1

