# Ruby 和 Jekyll 详细安装指南

## 第一步：下载 Ruby 安装程序

1. 访问 Ruby 安装程序官网：https://rubyinstaller.org/downloads/
2. 下载 "Ruby+Devkit 3.2.X (x64)" 版本
   - 注意：选择带有 `WITH DEVKIT` 的版本
   - 例如：`Ruby+Devkit 3.2.2-1 (x64)`

## 第二步：安装 Ruby

1. 双击运行下载的安装程序（例如：`rubyinstaller-devkit-3.2.2-1-x64.exe`）

2. 安装选项设置：
   - 勾选 "I accept the License"（接受许可协议）
   - 点击 "Next"（下一步）

3. 安装目录：
   - 建议使用默认目录：`C:\Ruby32-x64`
   - ⚠️ 重要：确保路径中没有中文字符
   - 点击 "Next"（下一步）

4. 安装组件选择：
   - ✅ 勾选 "Add Ruby executables to your PATH"（添加到系统环境变量）
   - ✅ 勾选 "Associate .rb and .rbw files with Ruby"（关联 Ruby 文件）
   - ✅ 勾选 "Use UTF-8 as default external encoding"（使用 UTF-8 编码）
   - 点击 "Install"（安装）

5. 等待安装完成

6. 安装完成后：
   - ✅ 保持勾选 "Run 'ridk install' to setup MSYS2"
   - 点击 "Finish"（完成）

## 第三步：运行 MSYS2 安装

1. Ruby 安装完成后会自动打开命令行窗口
2. 在命令行中：
   - 输入数字 `1` 
   - 按回车键
   - 等待安装完成（可能需要几分钟）
3. 安装完成后：
   - 如果没有错误提示，直接按回车键关闭窗口
   - 如果有错误，请截图保存

## 第四步：验证安装

1. 打开新的命令提示符窗口（CMD）：
   - 按 `Win + R` 键
   - 输入 `cmd`
   - 按回车键

2. 在命令提示符中输入以下命令验证安装：
```bash
ruby -v
```
应该看到类似这样的输出：
```
ruby 3.2.2 (2023-03-30 revision 957bb7cb81) [x64-mingw-ucrt]
```

3. 验证 gem 是否正常工作：
```bash
gem -v
```
应该看到版本号输出，例如：
```
3.4.10
```

## 常见问题解决

1. **如果提示 "ruby 不是内部或外部命令"**：
   - 关闭当前命令提示符
   - 重新打开一个新的命令提示符
   - 重试命令

2. **如果 MSYS2 安装失败**：
   - 以管理员身份运行命令提示符
   - 输入：`ridk install`
   - 选择选项 1 重新安装

3. **如果出现网络错误**：
   - 检查网络连接
   - 必要时使用代理或 VPN
   - 重试安装过程

## 下一步

安装完成后，请告诉我，我会帮您：
1. 安装 Jekyll 和 Bundler
2. 配置项目依赖
3. 启动开发服务器

## 需要帮助？

如果在安装过程中遇到任何问题：
1. 记录错误信息
2. 截取错误画面
3. 告诉我具体在哪一步出现问题

我会帮您解决遇到的问题！
