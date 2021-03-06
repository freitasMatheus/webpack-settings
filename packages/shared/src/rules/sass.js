// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import IS_DEV from 'isdev'

export default modulePaths => ({
  exclude: /\.module\.s[ac]ss$/,
  test: /\.s[ac]ss$/,
  use: [{
    loader: 'style-loader',
    options: { sourceMap: IS_DEV }
  }, {
    loader: 'css-loader',
    options: { sourceMap: IS_DEV }
  }, {
    loader: 'postcss-loader',
    options: { sourceMap: IS_DEV }
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: modulePaths,
      sourceMap: IS_DEV
    }
  }]
})
