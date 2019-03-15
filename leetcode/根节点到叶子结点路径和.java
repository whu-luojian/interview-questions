class Solution {
  List<List<Integer>> list=new ArrayList<List<Integer>>();
  public List<List<Integer>> pathSum(TreeNode root, int sum) {
      List<Integer> res=new ArrayList();
      if(root==null) return list;
      find(root,res,sum);
      return list;
  }
  public void find(TreeNode root,List<Integer> res,int sum){
      if(root==null) return;
      res.add(root.val);
      if(root.left==null&&root.right==null){
          if(sum==root.val){
              list.add(new ArrayList(res));
          }
          res.remove(res.size()-1);//return前自觉出栈
          return;
      }
      find(root.left,res,sum-root.val);
      find(root.right,res,sum-root.val);
      res.remove(res.size()-1);//return前自觉出栈
  }
}