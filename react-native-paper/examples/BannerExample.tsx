import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import {
    Banner, Button, MD2Colors,
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { useRef } from 'react';

type elevation  = 0 | 1 | 2 | 3 | 4 | 5 ;

export function BannerTest() {

    const viewRef = useRef<View>(null);  
    const measureView = () => {  
      if (viewRef.current) {  
        // 这里只是为了演示如何访问ref  
        console.log('View is referenced');
      }  
      console.log('View is viewRef');
    }; 


    const _onShowAnimationFinished =() => {
        console.info("fuction onShowAnimationFinished")
    }

    const _onHideAnimationFinished =() => {
        console.info("fuction onHideAnimationFinished")
    }

    const BannerProps = [
        {
          key: 'Banner style: visible ={true}',
          value: {
            visible:true,
            actions:[
                {
                label: 'Fix it',                     
                },
                {
                label: 'Learn more',
                
                },
            ],
            icon:'folder',
            value:"There was a problem processing a transaction on your credit card."
          }
        },
        {
            key: 'Banner style: visible ={false}',
            value: {
              visible:false,
              actions:[
                  {
                  label: 'Fix it',                     
                  },
                  {
                  label: 'Learn more',
                  
                  },
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card."
            }
        },
        {
            key: 'Banner style: actions ={[{label:"Fix it"},{label:"Learn more"}]}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card."
            }
          },
          {
            key: 'Banner style: contentStyle ={backgroundColor:MD2Colors.yellow500}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              contentStyle:{backgroundColor:MD2Colors.yellow500}
            }
          },
          {
            key: 'Banner style: elevation ={0}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:0 as elevation
            }
          },
          {
            key: 'Banner style: elevation ={1}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:1 as elevation
            }
          },
          {
            key: 'Banner style: elevation ={2}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:2 as elevation
            }
          },
          {
            key: 'Banner style: elevation ={3}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:3 as elevation
            }
          },
          {
            key: 'Banner style: elevation ={4}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:4 as elevation
            }
          },
          {
            key: 'Banner style: elevation ={5}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              elevation:5 as elevation
            }
          },
          {
            key: 'Banner style: maxFontSizeMultiplier ={1}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              maxFontSizeMultiplier:1
            }
          },
          {
            key: 'Banner style: {backgroundColor:MD2Colors.yellow500}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              style:{backgroundColor:MD2Colors.yellow500}
            }
          },
          {
            key: 'Banner style: theme = { colors: { primary:"green"} }',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              theme:{ colors: { primary: 'green' } }
            }
        },
        {
            key: 'Banner fuction: onShowAnimationFinished = {_onShowAnimationFinished}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              onShowAnimationFinished:_onShowAnimationFinished
            }
        },
        {
            key: 'Banner fuction: onHideAnimationFinished = {_onHideAnimationFinished}',
            value: {
              visible:true,
              actions:[
                  {label: 'Fix it'},
                  {label: 'Learn more'}
              ],
              icon:'folder',
              value:"There was a problem processing a transaction on your credit card.",
              onHideAnimationFinished:_onHideAnimationFinished
            }
        },
        {
          key: 'Banner style: style= { backgroundColor:MD2Colors.blue100}',
          value: {
            visible:true,
            actions:[
                {label: 'Fix it'},
                {label: 'Learn more'}
            ],
            style:{ backgroundColor:MD2Colors.blue100},
            icon:'folder',
            value:"There was a problem processing a transaction on your credit card.",
            onHideAnimationFinished:_onHideAnimationFinished
          }
      },
    ]

    return (
        <ScrollView>
         <Tester>
            <TestSuite name='Banner' >
            <TestCase itShould={'Appbar.Action style:ref={viewRef}'}  >
            <Banner
              ref={viewRef}
              visible={true}
              actions={[{ label: 'Fix it'},{label: 'Learn more' },
              ]}>
             There was a problem processing a transaction on your credit card.
          </Banner>
            <Button onPress={measureView} >Press me</Button>  
         </TestCase>
            {BannerProps.map((item) => {
             return (
                <TestCase  itShould={item.key}  key={item.key} > 
                  <View style={{height:160,justifyContent:"center"}}>
                   <Banner {...item.value}>
                        {item.value.value}
                    </Banner>
                  </View>
                </TestCase>
              );
            })}
            </TestSuite>
        </Tester>
        </ScrollView>
    )
}



export default BannerTest;
