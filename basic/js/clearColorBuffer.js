function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // 设置清空颜色缓冲区的颜色
  gl.clearColor(0, 0, 0, 1);

  // 清空颜色缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT);
}
