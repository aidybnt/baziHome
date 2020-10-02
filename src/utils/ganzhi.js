import jia from '@/assets/img/SVG/jia.svg'
import yi from '@/assets/img/SVG/yi.svg'
import bing from '@/assets/img/SVG/bing.svg'
import ding from '@/assets/img/SVG/ding.svg'
import wu from '@/assets/img/SVG/wu.svg'
import ji from '@/assets/img/SVG/ji.svg'
import geng from '@/assets/img/SVG/geng.svg'
import xin from '@/assets/img/SVG/xin.svg'
import ren from '@/assets/img/SVG/ren.svg'
import gui from '@/assets/img/SVG/gui.svg'
import zi from '@/assets/img/SVG/zi.svg'
import chou from '@/assets/img/SVG/chou.svg'
import yin from '@/assets/img/SVG/yin.svg'
import mao from '@/assets/img/SVG/mao.svg'
import chen from '@/assets/img/SVG/chen.svg'
import si from '@/assets/img/SVG/si.svg'
import wu_ from '@/assets/img/SVG/wu_.svg'
import wei from '@/assets/img/SVG/wei.svg'
import shen from '@/assets/img/SVG/shen.svg'
import you from '@/assets/img/SVG/you.svg'
import xu from '@/assets/img/SVG/xu.svg'
import hai from '@/assets/img/SVG/hai.svg'

function ganZhi(params) {
  let images = {
    '甲': jia,
    '乙': yi,
    '丙': bing,
    '丁': ding,
    '戊': wu,
    '己': ji,
    '庚': geng,
    '辛': xin,
    '壬': ren,
    '癸': gui,
    '子': zi,
    '丑': chou,
    '寅': yin,
    '卯': mao,
    '辰': chen,
    '巳': si,
    '午': wu_,
    '未': wei,
    '申': shen,
    '酉': you,
    '戌': xu,
    '亥': hai,
  }
  return images[params]
}

export function baZiImg(params) {
  return ganZhi(params)
}