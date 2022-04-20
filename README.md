# ICG_HW1
### WebGL
### 2022/04/20
## 環境Environment
* 本機端可運行於Firefox 和 Safari(需關閉阻擋CORS)
* 開啟 index.html來看網頁內容
* [Online Demo](https://hongrenke.github.io/ICG_HW1/)
* [Online Source](https://github.com/HongRenKe/ICG_HW1)

## 已具有功能 Implementations
* 三個model 在同個畫面  
* 三種基本shading(flat, Gouraud, Phong Shading)
* 四種基本的transformation(scale, transform, rotate, shear)
* 三個不同方向位置的光源

## 如何操作 Work
![This is an image](https://github.com/HongRenKe/ICG_HW1/blob/main/截圖%202022-04-20%20下午5.08.29.png)
操作選項皆位於畫布右側  
### Object
分別控制三個物體進行transformation  
其中可讓對應物體分別對x,y,z進行scale, transform, rotate  
而shear只有對x做變形（x+ycotθ)  
### Setting
* shading:切換shading種類
* transparent:物體的α值
* filedOfView:視野大小
* nearSurface:投影的近平面位置
* farSurface:投影的遠平面位置	
* pointLightSourceX:  
  1. ON/OFF:開啟/關閉第一個點光源(默認為在+X方向上). 
  2. Xposition:調整第一個點光源x方向位置  
  3. Yposition:調整第一個點光源y方向位置  
  4. Zposition:調整第一個點光源z方向位置  
* pointLightSourceY:  
  1. ON/OFF:開啟/關閉第二個點光源(默認為在+Y方向上).  
  2. Yposition:調整第二個點光源y方向位置   
* pointLightSourceＺ:  
  1. ON/OFF:開啟/關閉第三個點光源(默認為在+Z方向上).  
  2. Zposition:調整第二個點光源z方向位置  
(第二第三光源只有軸向的調整）

* reflection shininess:反射光亮度	
* ambientLight la*ka:環境光強度	
* YdirectionalLight:開啟/關閉y方向的平行光(沒可慮反射）	
* lightcolor:全部光源的顏色

## 參考資料 Ｒeference
* [webglfundamental: https://webglfundamentals.org/](https://webglfundamentals.org/)
* [flat shading normal: https://stackoverflow.com/questions/40101023/flat-shading-in-webgl](https://stackoverflow.com/questions/40101023/flat-shading-in-webgl)

  

