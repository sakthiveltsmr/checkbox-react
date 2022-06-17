import { useCallback, useState } from "react";
import InputJSON from "./inputJSON.json";
// import FormWrapper from "./Components/ScopeHandler/FormWrapper";
import { map } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

import Resource from "./Components/ScopeHandler/Resource";
import ScopeItem from "./Components/ScopeHandler/ScopeItem";
function App() {
  const [resources, setResources] = useState(InputJSON);
  const [selectedScopeCategories, setSelectedScopeCategories] = useState([]);

  const resourceClickHandler = useCallback(
    (data) => {
      const cacheResources = { ...resources };
      const { resourceIndex } = data;
      cacheResources[resourceIndex].checked = !resources[resourceIndex].checked;
      setResources(cacheResources);
    },
    [resources]
  );
  const getSelectedCategories = () => {
    let categories = [];
    map(resources, (resource) => {
      map(resource.scopes, (scope) => {
        console.log(categories.includes(scope.category));
        if (categories.includes(scope.category) && scope.checked) {
          categories.push(scope.category);
        }
      });
    });
    return categories;
  };

  const scopeClickHandler = useCallback(
    (data) => {
      console.log("data:", data);
      const { selectedScope, resourceIndex, scopeIndex } = data;
      if (!selectedScope) return;
      const cacheResources = { ...resources };
      cacheResources[resourceIndex].scopes[scopeIndex].checked =
        !selectedScope.checked;
      let selectedCategories = getSelectedCategories();
      console.log(selectedCategories);
      setResources(cacheResources);

      setSelectedScopeCategories(selectedCategories);
    },
    [resources]
  );

  return (
    <>
      <div>
        {map(resources, (resource, resourceIndex) => {
          return (
            <div key={resourceIndex}>
              <Resource
                resource={{ ...resource, index: resourceIndex }}
                onChange={resourceClickHandler}
              />
              {map(resource.scopes, (scope, scopeIndex) => {
                return (
                  <div key={scopeIndex}>
                    <ScopeItem
                      scope={{
                        item: scope,
                        resourceIndex,
                        scopeIndex,
                        resource,
                      }}
                      scopes={resource.scopes}
                      onchange={scopeClickHandler}
                      selectedScopeCategories={getSelectedCategories}
                      forceChecked={resource.checked}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
