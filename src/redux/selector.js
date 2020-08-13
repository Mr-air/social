export const getProfileSel = (state) => {
 return state.contentpagereducer.profile
}

export const getiduserSel = (state) => {
return state.Authreducer.userid
}

export const getisFetchingSel = (state) => {
return state.contentpagereducer.isFetching
}

export const getstatusSel = (state) => {
return state.contentpagereducer.status
}

export const getDialogDAtaSel = (state) => {
return state.messagepagereducer.DialogDAta
}
   
export const getmessageDAtaSel = (state) => {
return state.messagepagereducer.messageDAta
}
   
export const getvalueSel = (state) => {
return state.messagepagereducer.MesssageText
}
   
export const getisAuthSel = (state) => {
return state.Authreducer.isAuth
}

export const getuserssSel = (state) => {
return state.userspagereducer.users
}
    
export const getPagesizeSel = (state) => {
return state.userspagereducer.PageSize
}
    
export const getcountTotalSel = (state) => {
return state.userspagereducer.countTotal
}
       
 export const getPageactiveSel = (state) => {
return state.userspagereducer.Pageactive
}
       
export const getisFetchinusegSel = (state) => {
return state.userspagereducer.isFetching
}
       
export const getisButtonClickSel = (state) => {
return state.userspagereducer.isButtonClick
}

export const getPostmapSel = (state) => {
return state.contentpagereducer.Post
}
       
export const getvaluePostSel = (state) => {
return state.contentpagereducer.ChangeText
} 
 
export const getemailAuthmapSel = (state) => {
return state.Authreducer.email
}
          
export const getloginAuthSel = (state) => {
return  state.Authreducer.login
}